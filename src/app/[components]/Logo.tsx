export const Logo = () => (
  <div className={"grid [grid-template-areas:'logo-area'] px-2"}>
    <h1
      className={
        'font-sans text-4xl text-secondary [grid-area:logo-area] mt-[3px]'
      }
    >
      Rate My Flex
    </h1>
    <h1
      className={
        'font-sans text-4xl text-primary [grid-area:logo-area] ml-[3px]'
      }
    >
      Rate My Flex
    </h1>
  </div>
);
