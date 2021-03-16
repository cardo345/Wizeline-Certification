import dotenv from 'dotenv'
dotenv.config()

export const CREDENTIALS = {
    VALID_USER:{
        USERNAME: 'standard_user',
        PASSWORD: 'secret_sauce'
},
    INVALID_USER:{
        USERNAME: 'invalid_user',
        PASSWORD: 'invalid_password'
},
    LOCKED_USER:{
        USERNAME: 'locked_out_user',
        PASSWORD: 'secret_sauce'
    },
    PROBLEM_USER:{
        USERNAME: 'problem_user',
        PASSWORD:'secret_sauce'
    },
    PERFORMANCE_GLITCH_USER:{
        USERNAME: 'performance_glitch_user',
        PASSWORD: 'secret_sauce'
    },
    USER_INFO:{
        FIRSTNAME: 'Ricardo',
        LASTNAME: 'Ramirez',
        ZIP: '90210'
    }

    

}