import Checkbutton from "./Checkbutton";

type CheckButtonGroupProps = {
  selections: string[];
};

export default function CheckbuttonGroup(props: CheckButtonGroupProps) {
  return (
    <>
      {props.selections.map((item) => (
        <Checkbutton title={item} checked={() => {}} />
      ))}
    </>
  );
}
