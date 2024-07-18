
"use client";

export interface PeopleData {
    name: string,
    contactNo: string,
    profileType: string,
    socialMediaName: string,
    city: string,
    type: string,
    gender: string
}
  
  
export const peopleData: PeopleData[] = [
    {
        name: "Johny Doe",
        contactNo: "6783451290",
        profileType: "pub",
        socialMediaName: "joh-doe",
        city: "Liverpool",
        type: "C",
        gender: "Male"
    },
    {
        name: "David Mair",
        contactNo: "6123456789",
        profileType: "pub",
        socialMediaName: "david-mair",
        city: "London",
        type: "C",
        gender: "Male"
    },
    {
        name: "Brian Carl",
        contactNo: "6122345672",
        profileType: "priv",
        socialMediaName: "brian-carl",
        city: "London",
        type: "C",
        gender: "Other"
    },
    {
        name: "Lisa Leem",
        contactNo: "6122343672",
        profileType: "priv",
        socialMediaName: "lisa-lee",
        city: "London",
        type: "P",
        gender: "Female"
    },
    {
        name: "Chris Gair",
        contactNo: "6123343672",
        profileType: "pub",
        socialMediaName: "cris-gair",
        city: "London",
        type: "P",
        gender: "Male"
    },
    {
        name: "Akshay Sharma",
        contactNo: "9912534567",
        profileType: "pub",
        socialMediaName: "aksh-sharma",
        city: "Pune",
        type: "C",
        gender: "Male"
    },
    {
        name: "Reena Dalal",
        contactNo: "9912554567",
        profileType: "priv",
        socialMediaName: "ree-dalal",
        city: "Pune",
        type: "C",
        gender: "Female"
    },
    {
        name: "Mrunal Verma",
        contactNo: "9912559567",
        profileType: "pub",
        socialMediaName: "mrun-verma",
        city: "Pune",
        type: "C",
        gender: "Other"
    },
    {
        name: "Seema Ray",
        contactNo: "7172384567",
        profileType: "priv",
        socialMediaName: "seema-ray",
        city: "Pune",
        type: "P",
        gender: "Female"
    },
    {
        name: "Jivisha Pal",
        contactNo: "8123345673",
        profileType: "priv",
        socialMediaName: "jivi-pal",
        city: "Mumbai",
        type: "P",
        gender: "Female"
    }
];
  