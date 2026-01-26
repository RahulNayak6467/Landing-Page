function CtaHighlightItem({ component, text }) {
  return (
    <div className="flex gap-2 items-center text-sm">
      {component}
      <p className="gradientText  text-xs sm:text-sm">{text}</p>
    </div>
  );
}

export default CtaHighlightItem;
