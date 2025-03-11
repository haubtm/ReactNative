import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
    password: Yup.string()
        .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
        .max(50, 'Mật khẩu không được quá 50 ký tự')
        .required('Mật khẩu không được để trống'),
    email: Yup.string()
        .email('Email không hợp lệ')
        .required('Email không được để trống')
})

export const SignUpSchema = Yup.object().shape({
    password: Yup.string()
        .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
        .max(50, 'Mật khẩu không được quá 50 ký tự')
        .required('Mật khẩu không được để trống'),
    email: Yup.string()
        .email('Email không hợp lệ')
        .required('Email không được để trống'),
    name: Yup.string()
        .required('Họ tên không được để trống')
})