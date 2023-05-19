# Expoxysaurus

A very simple proxy to expose localhost to LAN wifi. I built this to help me expose websites run on Apache Virtual Host, for instance WordPress.

> It means **Exp**ose Pr**oxy** Dino**saurus**. I'm so sorry, it can't be help, it gotta be this way.


## Instruction

### Run from the repo

1. Make the [`mod.ts`](/mod.ts) script executable: `sudo chmod 775 ./mod.ts`
2. Run command like this: `./mod.ts -w <VIRTUAL_HOST.WEBSITE>`

### Install using Deno install

1. Make sure Deno is available, if not, install Deno.
2. Run command: `deno install --allow-net --name expoxysaurus "https://gitlab.com/"`


## TODO

- [ ] add CLI help message
- [ ] finish 'Install using Deno install' instruction
- [ ] improve replace target url with better algorithm (in [`utility.ts`](/src/utility.ts))

# References

- https://unix.stackexchange.com/questions/110348/how-do-i-get-the-list-of-exit-codes-and-or-return-codes-and-meaning-for-a-comm