interface Props {
  clickHandler: () => void;
}

const CreateNewButton = ({ clickHandler }: Props) => {
  return (
    <div
      onClick={clickHandler}
      className="ease-in duration-300 text-white font-black text-5xl absolute
       bottom-10 right-10 hover:cursor-pointer bg-blue-500 pb-2 px-3 rounded-md hover:rotate-90"
    >+</div>
  )
}

export default CreateNewButton;
