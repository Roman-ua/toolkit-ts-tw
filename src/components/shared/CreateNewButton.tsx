interface Props {
  clickHandler: () => void;
  disabled: boolean;
}

const CreateNewButton = ({ clickHandler, disabled }: Props) => {
  return (
    <button
      disabled={disabled}
      type="button"
      onClick={clickHandler}
      className="ease-in duration-300 text-white font-black text-5xl absolute
       bottom-10 right-10 hover:cursor-pointer bg-blue-500 pb-2 px-3 rounded-md hover:rotate-90 disabled:opacity-50"
    >+</button>
  )
}

export default CreateNewButton;
