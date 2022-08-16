import { withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
//----------------------------------------------------------------------------------------
import { startLogin } from '../actions/userActions'
//----------------------------------------------------------------------------------------

const LoginForm = (props) => {

    const user = useSelector((state) => {
        return state.user
    })

    const dispatch = useDispatch()

    const validationSchema = Yup.object({
        email: Yup.string()
            .required('email is required!')
            .email('Invalid email!'),
        password: Yup.string()
            .required('password is requried!')
    })

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: (formData, { resetForm }) => {
            dispatch(startLogin(formData, resetForm, props))
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>

            <input
                type="text"
                name='email'
                placeholder='email'
                value={formik.values.email}
                onChange={formik.handleChange}
            />
            <div>
                {formik.touched.email && Boolean(formik.errors.email) && formik.errors.email}
            </div>
            <br />

            <input
                type="password"
                name='password'
                placeholder='password'
                value={formik.values.password}
                onChange={formik.handleChange}
            />
            <div>
                {formik.touched.password && Boolean(formik.errors.password) && formik.errors.password}
            </div>
            <br />

            {(user.loginErrors.errors) && (
                <div>{user.loginErrors.errors.message}</div>
            )}

            <input type="submit" value='LOGIN' />

        </form>
    )
}

export default withRouter(LoginForm)