export default function TabButton({children, onSelect, isSelected}) {
  // function handleClick() {
  //   console.log('Hello World!');
  // }
  console.log('TABBUTTON COMPONENT EXECUTING');

  return (
    <li>
      <button className={isSelected?'active':undefined} onClick={onSelect}>{children}</button>
    </li>
  );
}
