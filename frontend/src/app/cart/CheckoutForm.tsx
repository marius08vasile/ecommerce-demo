import FormTextarea from "@/components/form/FormTextarea";
import SubmitButton from "@/components/form/SubmitButton";
import Form from "@components/form/Form";
import FormField from "@components/form/FormField";
import { phoneRegExp } from "@utils/regexp";
import * as Yup from 'yup';

type Props = {
  onSubmit: (formData: object) => void,
  total: number,
  loading?: boolean,
}

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required().label("First Name"),
  lastName: Yup.string().required().label("Last Name"),
  email: Yup.string().required().email().label("Email"),
  phone: Yup.string().required().matches(phoneRegExp, 'Phone number is not valid').label("Phone"),
  address: Yup.string().required().label("Address"),
});

const CheckoutForm: React.FC<Props> = ({ onSubmit, total, loading }) => {
  return (
    <Form
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <div className="col-md-4 summary">
        <div><h5><b>Delivery address</b></h5></div>

        <div className="row">
          <div className="col-lg-6 mb-2">
            <FormField
              name="firstName"
              label="First Name"
            />
          </div>
          <div className="col-lg-6 mb-2">
            <FormField
              name="lastName"
              label="Last Name"
            />
          </div>
          <div className="col-lg-12 mb-2">
            <FormField
              name="email"
              label="Email"
            />
          </div>
          <div className="col-lg-12 mb-2">
            <FormField
              name="phone"
              label="Phone"
            />
          </div>
          <div className="col-lg-12 mb-2">
            <FormTextarea
              name="address"
              label="Address"
            />
          </div>
        </div>

        <div><h5><b>Summary</b></h5></div>

        <div className="col">
          <div className="row" style={{ borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0' }}>
            <div className="col">TOTAL PRICE</div>
            <div className="col text-right">$ {total}</div>
          </div>
        </div>

        <SubmitButton
          title="Place order"
          className="btn-success w-100"
          disabled={loading}
        />

      </div>
    </Form>
  )
}

export default CheckoutForm;