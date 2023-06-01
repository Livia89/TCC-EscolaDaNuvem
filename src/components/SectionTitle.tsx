
  interface TitleProps {
    title: string
    color: string
  }

function Title(props: TitleProps ): React.ReactElement {
    const {title, color} = props
  return (
    <div className=" relative my-4 ">
      <div className="font-cormorant text-xl uppercase font-bold tracking-widest z-50 relative ">
        <span className="bg-white"> {title} </span>
      </div>
      <div className={`border-t-2 bg-[${color}] absolute left-0 right-0 bottom-4 z-10`}></div>
    </div>
  );
}

export default Title;
