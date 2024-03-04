const PricingList = ({children}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {children}
    </div>
  );
};

export default PricingList;
