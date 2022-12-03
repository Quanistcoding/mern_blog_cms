export default (req:any,res:any,next:any) => {
    res.status(404).send("Page not found...");
};