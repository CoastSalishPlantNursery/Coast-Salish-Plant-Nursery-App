import Checkbutton from "./Checkbutton";

type CheckButtonGroupProps = {
  selections: string[];
};

export default function CheckbuttonGroup(props: CheckButtonGroupProps) {
  return (
    <>
      {props.selections.map((item) => (
        <Checkbutton key={item} title={item} checked={() => {}} />
      ))}
    </>
  );
}
