function isAnagram(s: string, t: string): boolean {
  //time O(n), spaceO(n)
  let sMap = new Map<string, number>();
  let tMap = new Map<string, number>();
  if (s.length != t.length) return false;
  for(let i:number=0; i< s.length; i++) {
    let sch:string = s[i]
    if (!sMap.get(sch)) {
        sMap.set(sch, 1);
    } else {
        sMap.set(sch, sMap.get(sch)+1);
    }
  }
  for(let i:number=0; i< t.length; i++) {
    let tch:string = t[i]
    if (!tMap.get(tch)) {
        tMap.set(tch, 1);
    } else {
        tMap.set(tch, tMap.get(tch)+1);
    }
  }
  //let key in map -> can't be used in ts
  for (let [key, value] of sMap) {
    if (sMap.get(key) != tMap.get(key)) return false;
  }
  return true
};