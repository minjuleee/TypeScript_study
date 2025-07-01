export interface Animal {
  species: string;
  canSpeak: boolean;
  numberOfLegs?: number; // 다리가 없을수도 있으니까 -> 옵셔널 !
}

const myDog: Animal = {
  species: "Dog",
  canSpeak: false, 
  numberOfLegs: 4, // 선택사항
}