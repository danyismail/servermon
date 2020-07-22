export const setCookie = (cname, cvalue, exdays) => {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export const api = () => {
    return "http://dev.beacukai.go.id:9012";
}

export const formatDate = string => {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([], options);
}

export const formatTime = string => {
    var options = { hours: 'numeric' };
    return new Date(string).toLocaleTimeString([], options);
}

