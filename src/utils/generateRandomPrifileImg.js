import sampleCardImg1 from "../assets/images/mentorProfile/selfie1.PNG"
import sampleCardImg2 from "../assets/images/mentorProfile/selfie2.PNG"
import sampleCardImg3 from "../assets/images/mentorProfile/selfie3.PNG"
import sampleCardImg4 from "../assets/images/mentorProfile/selfie4.PNG"
import sampleCardImg5 from "../assets/images/mentorProfile/selfie5.PNG"
import sampleCardImg6 from "../assets/images/mentorProfile/selfie6.PNG"

export const generateRandomMentorCardLogoImg = () => {
  const randomKey = Math.floor(Math.random() * 10) % 5

  if (randomKey === 0) {
    return sampleCardImg1
  }
  if (randomKey === 1) {
    return sampleCardImg2
  }
  if (randomKey === 2) {
    return sampleCardImg3
  }
  if (randomKey === 3) {
    return sampleCardImg4
  }
  if (randomKey === 4) {
    return sampleCardImg5
  }
  if (randomKey === 5) {
    return sampleCardImg6
  }
}
