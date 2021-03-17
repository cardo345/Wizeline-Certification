import dotenv from 'dotenv'
dotenv.config()

export const CREDENTIALS = {
    VALID_USER:{
        USERNAME: process.env.TESTUSER,
        PASSWORD:  process.env.TESTPWD
},
    INVALID_USER:{
        USERNAME: process.env.TESTUSER5,
        PASSWORD: process.env.TESTPWD
},
    LOCKED_USER:{
        USERNAME: process.env.TESTUSER2,
        PASSWORD: process.env.TESTPWD
    },
    PROBLEM_USER:{
        USERNAME: process.env.TESTUSER3,
        PASSWORD:process.env.TESTPWD
    },
    PERFORMANCE_GLITCH_USER:{
        USERNAME: process.env.TESTUSER4,
        PASSWORD: process.env.TESTPWD
    },
    USER_INFO:{
        FIRSTNAME: 'Ricardo',
        LASTNAME: 'Ramirez',
        ZIP: '90210'
    }
}