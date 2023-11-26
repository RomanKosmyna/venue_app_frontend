const backend = "http://localhost:3000/";

const urls = {
    auth: {
        signin: `${backend}auth/signin`,
        signup: `${backend}auth/signup`
    }
};

export { backend, urls };