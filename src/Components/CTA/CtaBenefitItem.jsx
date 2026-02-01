function CtaBenefitItem({ component, text }) {
  return (
    <div className="flex gap-2 items-center">
      {component}
      <p className="gradientText text-sm font-500">{text}</p>
    </div>
  );
}

export default CtaBenefitItem;
