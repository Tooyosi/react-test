import { Button, Input } from "reactstrap";

export default function FormComponent() {
    return (
        <form>
            <div className="d-flex">
                <p className="font-weight-bold mr-1">
                    Request an invite to reserve a spot. We’ll send you an email when we launch
                </p>&#128640;
            </div>

            <Input
                type="email"
                required={true}
                placeholder="Enter your email"
                className="text-center font-weight-bolder"
            />
            <Button block color="warning" className="font-weight-bolder my-3">REQUEST INVITE</Button>
            <p className="text-muted">
            By entering your email, you agree to receive launching and marketing emails from Coachmie.
            </p>
        </form>
    )
}
