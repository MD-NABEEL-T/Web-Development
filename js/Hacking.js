async function delayMessage(msg,sec){
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log(msg)
            resolve();

        }, sec);
    })
}

async function main(){
    await delayMessage("Initializing Hacking", 2000);

    await delayMessage("Reading your files...", 2000);
    await delayMessage("Password files Detected...", 2000);
    await delayMessage("Sending all passwords to server...", 2000);
    await delayMessage("Cleaning up...", 2000);
}
main()

// What happens here?
// A Promise is created.
// setTimeout waits for sec milliseconds.
// After the time is over:
// It prints the message.
// → which means “I’m done.”
// So this Promise only finishes after the timer ends.

//the three dots must blink so it looks like a terminal