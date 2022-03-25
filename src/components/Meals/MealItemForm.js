import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";
const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input></Input>
      <button>Add</button>
    </form>
  );
};
export default MealItemForm;
