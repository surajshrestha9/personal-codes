import { Button} from "react-bootstrap";
const ButtonComponent = ({ showSubmit, showCancel, text }) => {
  return (
    <>
      {showCancel ? (
        <>
          <Button type="reset" variant="danger" className="me-3">
            {text}
          </Button>
        </>
      ) : (
        <></>
      )}
      {showSubmit ? (
        <>
          <Button type="submit" variant="success">
            {text}
          </Button>
        </>
      ) : (
        <></>
      )}

      {/* <Button type="reset" variant="danger" className="me-3">
        reset
      </Button>
      <Button type="submit" variant="success">
        login
      </Button> */}
    </>
  );
};
export default ButtonComponent;
