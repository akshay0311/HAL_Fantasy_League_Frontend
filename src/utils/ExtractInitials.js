export default function extractInitials(name) {
    let name_array = name.split(" ");
    let l = name_array.length;
    let fName, lName;
    let initials;
    if (l === 1){
        fName = name_array[0];
        initials = fName.substr(0,1)
        return initials;
    }
    else { 
        fName = name_array[0];
        lName = name_array[l-1];
        initials = fName.substr(0,1) + lName.substr(0,1);
        return initials;
    }
}