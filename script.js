function Button() {
    let name = document.getElementById('name').value;
    let age = document.getElementById("Age").value;
    let sex = document.querySelector('input[name="Sex"]:checked').value;
    let email = document.getElementById("email").value;
    let sport = document.getElementById("Sport").value;
    let Province = document.getElementById("Province").value;

    let body =
    "Thank you for subscription at this page." +
    "\nThis is your information." +
    "\n\n\nThe name is: " + name + 
    ".\nThe age is: " + age + 
    ".\nThe sex is: " + sex +
    ".\nThe email is: " + email +
    ".\nThe sport is: " + sport +
    ".\nThe province is: " + Province +
    "\n\n\nPlease don`t reply this mail."

    document.location.href = "mailto:" + email + "?subject=Subscription"
        + "&body=" + encodeURIComponent(body);
}
