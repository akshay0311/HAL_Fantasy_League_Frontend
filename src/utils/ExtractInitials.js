export default function extractInitials(name) {
    let name_array = name.split(" ");
    let l = name_array.length;
    let fName = name_array[0];
    let lName = name_array[l-1];
    let intials = fName.substr(0,1) + lName.substr(0,1);
    return intials;
}