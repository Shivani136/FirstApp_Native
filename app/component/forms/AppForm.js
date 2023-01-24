import React from 'react';
import { Formik } from 'formik';

function AppForm({initialValues,onSubmit , validationSchema, children}) {
    return (
        <Formik // for input validation 
        
        initialValues = {initialValues}
        onSubmit={onSubmit}
        validationSchema ={validationSchema}
        >
        { ()=><>{children}</>}
        </Formik>
    );
}

export default AppForm;