function CtaBenefitItem({ component, text }) {
  return (
    <div className="flex gap-2 items-center">
      {/* <TargetIcon size={16} className="text-white" /> */}
      {component}
      <p className="text-text-secondary text-sm font-500">{text}</p>
    </div>
  );
}

export default CtaBenefitItem;
