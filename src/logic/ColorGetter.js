const colorsList=[
"C8A2C8",
"C2B97F",
"000080",
"FF7F50",
"7FD8BE",
"2F2F2F",
"E30022",
"00A676",
"464E47",
"114B5F",
"2E2532",
"5D2F27",
"AAD922",
"ADB4BF",
"99665F",
"5C2751"
];
export default function getColor(number){
    
    const index = Math.floor(Math.random()*16);
    return "#"+colorsList[index];
};


