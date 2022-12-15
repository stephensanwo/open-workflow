import React, { Fragment, useState } from "react";
import { PageContainer, BasePage } from "../../shared/layout";
import { Button } from "carbon-components-react";
import { ArrowRight16 } from "@carbon/icons-react";
import { TextInput, InlineLoading } from "carbon-components-react";
import { Link } from "react-router-dom";
import { AuthContainer } from "./styles";
import { UserSignUpProps } from "../../types/user";
import { useMutation } from "@tanstack/react-query";
import { Register } from "../../api/mutations";
import { AlertData } from "../../types/errors";
import { ShowAlerts } from "../../components/Alert";
import { handleErrors } from "../../api/errors";
import { useNavigate } from "react-router-dom";

const SignUp: React.FC = () => {
  const formData = {
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    confirm_password: "",
  };
  const [form, setForm] = useState<UserSignUpProps>(formData);
  const [formErrors, setFormErrors] = useState<UserSignUpProps>(formData);
  const [alerts, setAlerts] = useState<Array<AlertData>>([]);
  const navigate = useNavigate();

  const { isLoading, mutate: RegisterMutation } = useMutation(Register, {
    onSuccess: (res: any) => {
      navigate("/home");
    },
    onError: (err: any) => {
      const { formErrors, alertsData } = handleErrors(err);
      setAlerts([...alerts, alertsData]);
      setFormErrors(formErrors);
    },
  });

  const RegisterAction = (e: any) => {
    e.preventDefault();
    RegisterMutation(form);
  };

  return (
    <Fragment>
      <PageContainer dark>
        <BasePage>
          <AuthContainer>
            <div>
              <h4>Create a New Account</h4>
              <TextInput
                id="input-firstname"
                name="firstname"
                invalidText={formErrors.firstname}
                labelText={"First Name"}
                placeholder={"Test"}
                onChange={(e: any) =>
                  setForm({
                    ...form,
                    [e.target.name]: e.target.value,
                  })
                }
                disabled={""}
                value={form.firstname}
                variableName={""}
                light={false}
                invalid={formErrors.firstname && true}
              />
              <TextInput
                id="input-lastname"
                name="lastname"
                invalidText={formErrors.lastname}
                labelText={"Last Name"}
                placeholder={"User"}
                onChange={(e: any) =>
                  setForm({
                    ...form,
                    [e.target.name]: e.target.value,
                  })
                }
                disabled={""}
                value={form.lastname}
                variableName={""}
                light={false}
                invalid={formErrors.lastname && true}
              />
              <TextInput
                id="input-email"
                name="email"
                invalidText={formErrors.email}
                labelText={"Email *"}
                placeholder={"test.user@email.com"}
                onChange={(e: any) =>
                  setForm({
                    ...form,
                    [e.target.name]: e.target.value,
                  })
                }
                disabled={""}
                value={form.email}
                variableName={""}
                light={false}
                invalid={formErrors.email && true}
              />
              <TextInput
                type="password"
                id="input-password"
                name="password"
                invalidText={formErrors.password}
                labelText={"Password *"}
                placeholder={"Password"}
                onChange={(e: any) =>
                  setForm({
                    ...form,
                    [e.target.name]: e.target.value,
                  })
                }
                disabled={""}
                value={form.password}
                variableName={""}
                light={false}
                invalid={formErrors.password && true}
              />
              <TextInput
                type="password"
                id="input-confirm_password"
                name="confirm_password"
                invalidText={formErrors.confirm_password}
                labelText={"Confirm Password *"}
                placeholder={"Confirm Password"}
                onChange={(e: any) =>
                  setForm({
                    ...form,
                    [e.target.name]: e.target.value,
                  })
                }
                disabled={""}
                value={form.confirm_password}
                variableName={""}
                light={false}
                invalid={formErrors.confirm_password && true}
              />
              <div>
                <Button
                  kind="secondary"
                  renderIcon={
                    isLoading ? () => <InlineLoading /> : () => <ArrowRight16 />
                  }
                  iconDescription={"Sign Up"}
                  style={{
                    marginTop: "40px",
                    marginBottom: "40px",
                    maxWidth: "100%",
                    width: "100%",
                  }}
                  onClick={RegisterAction}
                  className="button-with-inline-loading"
                >
                  Create Account
                </Button>
              </div>
              <div>
                <Link to="/">Already created an account? Log in</Link>
              </div>
            </div>
          </AuthContainer>
        </BasePage>
      </PageContainer>
      {alerts && <ShowAlerts alerts={alerts}></ShowAlerts>}
    </Fragment>
  );
};
export default SignUp;
