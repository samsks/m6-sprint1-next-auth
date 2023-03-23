import ProfileCard from "@/components/profileCard";
import { IUserData } from "@/types";


export default function Profile({name, email}: IUserData) {

    return (
      <>
       <ProfileCard email={"felipe@mail"} name={"Felipe"}/>
      </>
    )
  }