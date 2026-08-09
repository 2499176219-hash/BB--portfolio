import type { CSSProperties } from "react";

type FoldTextProps = {
  text: string;
  splitBy?: "char" | "word";
  hinge?: "top" | "bottom";
  trigger?: "mount";
  duration?: number;
  stagger?: number;
  ease?: string;
  perspective?: number;
  creaseShading?: number;
  fontSize?: number | string;
  fontWeight?: number | string;
  color?: string;
};

type FoldTextStyle = CSSProperties & Record<`--fold-${string}`, string | number>;

function resolveEase(ease: string) {
  return ease === "power3.out" ? "cubic-bezier(.22,1,.36,1)" : ease;
}

export default function FoldText({
  text,
  splitBy = "char",
  hinge = "top",
  trigger = "mount",
  duration = 0.65,
  stagger = 0.045,
  ease = "power3.out",
  perspective = 700,
  creaseShading = 0.55,
  fontSize = "inherit",
  fontWeight = "inherit",
  color = "inherit",
}: FoldTextProps) {
  const pieces = splitBy === "word" ? text.split(/(\s+)/) : Array.from(text);
  const style: FoldTextStyle = {
    "--fold-duration": `${duration}s`,
    "--fold-stagger": `${stagger}s`,
    "--fold-ease": resolveEase(ease),
    "--fold-perspective": `${perspective}px`,
    "--fold-crease": creaseShading,
    "--fold-font-size": typeof fontSize === "number" ? `${fontSize}px` : fontSize,
    "--fold-font-weight": fontWeight,
    "--fold-color": color,
  };

  return (
    <span className={`fold-text fold-text--hinge-${hinge} fold-text--${trigger}`} style={style} aria-label={text}>
      {pieces.map((piece, index) => (
        <span className="fold-text__char" style={{ "--fold-index": index } as FoldTextStyle} aria-hidden="true" key={`${piece}-${index}`}>
          <span className="fold-text__face">{/^\s+$/.test(piece) ? "\u00a0" : piece}</span>
        </span>
      ))}
    </span>
  );
}
