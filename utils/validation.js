export const validateName = (name) => {
    const re = /^[a-zA-Z ]{2,30}$/;
    return re.test(name);
}

export const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

export const validateSubject = (subject) => {
    const re = /^.{4,40}$/;
    return re.test(subject);
}

export const validateMessage = (message) => {
    const re = /^.{4,80}$/;
    return re.test(message);
}