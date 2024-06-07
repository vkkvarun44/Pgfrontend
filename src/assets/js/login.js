import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

export default {
  components:{Form, Field, ErrorMessage},

 setup(){
  const schema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(8),
  })

  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  }

  return {
    schema,
    onSubmit
  }

 }

};