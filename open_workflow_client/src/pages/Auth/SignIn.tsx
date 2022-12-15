import React, { Fragment, useState } from "react";
import { PageContainer, BasePage } from "../../shared/layout";
import { Button } from "carbon-components-react";
import { ArrowRight16 } from "@carbon/icons-react";
import { TextInput, InlineLoading } from "carbon-components-react";
import { Link } from "react-router-dom";
import { AuthContainer } from "./styles";
import { UserSignInProps } from "../../types/user";
import { AlertData } from "../../types/errors";
import { useMutation } from "@tanstack/react-query";
import { Login } from "../../api/mutations";
import { handleErrors } from "../../api/errors";
import { ShowAlerts } from "../../components/Alert";
import { useNavigate } from "react-router-dom";

const SignIn: React.FC = () => {
  const formData = {
    email: "",
    password: "",
  };

  const [form, setForm] = useState<UserSignInProps>(formData);
  const [formErrors, setFormErrors] = useState<UserSignInProps>(formData);
  const [alerts, setAlerts] = useState<Array<AlertData>>([]);
  const navigate = useNavigate();

  const { isLoading, mutate: LoginMutation } = useMutation(Login, {
    onSuccess: (res: any) => {
      navigate("/home");
    },
    onError: (err: any) => {
      const { formErrors, alertsData } = handleErrors(err);
      setAlerts([...alerts, alertsData]);
      setFormErrors(formErrors);
    },
  });

  const LoginAction = (e: any) => {
    e.preventDefault();
    LoginMutation(form);
  };
  console.log(alerts);
  console.log(formErrors);
  return (
    <Fragment>
      <PageContainer dark>
        <BasePage>
          <AuthContainer>
            <div>
              <h4>Login</h4>
              <TextInput
                id="input-email"
                name="email"
                invalidText={formErrors.email}
                labelText={"Email"}
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
                labelText={"Password"}
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
              <div>
                <Button
                  kind="secondary"
                  renderIcon={
                    isLoading ? () => <InlineLoading /> : () => <ArrowRight16 />
                  }
                  iconDescription={"Sign In"}
                  style={{
                    marginTop: "40px",
                    marginBottom: "40px",
                    maxWidth: "100%",
                    width: "100%",
                  }}
                  onClick={LoginAction}
                  className="button-with-inline-loading"
                >
                  Login
                </Button>
              </div>
              <div>
                <Link to="/signup">Create a new account</Link>
              </div>
            </div>
          </AuthContainer>
        </BasePage>
      </PageContainer>
      {alerts && <ShowAlerts alerts={alerts}></ShowAlerts>}
    </Fragment>
  );
};
export default SignIn;
