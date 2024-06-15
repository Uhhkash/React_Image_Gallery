
export default async function Page () {

    await new Promise((resolve) => setTimeout(resolve, 100));
    //throw Error("Bazinga");
    return (<div>Hello NextJS!</div>);
}