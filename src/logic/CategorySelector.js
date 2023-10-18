export default function getRandomCategory(){
    const category = ["age","alone","amazing","anger","architecture","art","attitude","beauty","best","birthday","business","car","change","computers","cool","courage","dad","dating","death","design","dreams","education","environmental","equality","experience","failure","faith","family","famous","fear","fitness","food","forgiveness","freedom","friendship","funny","future","god","good","government","graduation","great","happiness","health","history","home","hope","humor","imagination","inspirational","intelligence","jealousy","knowledge","leadership","learning","legal","life","love","marriage","medical","men","mom","money","morning","movies","success"];
    
    let randomIndex = Math.floor(Math.random()*66);
    return category[randomIndex];
}

