export const validatepassword = ({ getFieldValue }) => ({
    validator(_,value) {
        if (!value || getFieldValue('password') === value) {
            return Promise.resolve();
        }

        return Promise.reject(new Error('Las contraseñas no coincides'))
    }
});