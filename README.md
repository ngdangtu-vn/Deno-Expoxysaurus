# Expoxysaurus

A very simple proxy to expose localhost to LAN wifi. I built this to help me
expose websites run on Apache Virtual Host, for instance WordPress.

> It means **Exp**ose Pr**oxy** Dino**saurus**. I'm so sorry, it can't be help,
> it gotta be this way.

## Instruction

### Run from the repo

1. Make the [`mod.ts`](/mod.ts) script executable: `sudo chmod 775 ./mod.ts`
2. Run command like this: `./mod.ts -w <VIRTUAL_HOST.WEBSITE>`

### Install using Deno install

1. Make sure Deno is available, if not, install Deno.
2. Run script from:
   - Gitlab: So far, it doesn't play well with Deno so Github repo fork is
     created.
   - Github:
     `deno install --name expoxysaurus --import-map "https://raw.githubusercontent.com/ngdangtu-vn/Deno-Expoxysaurus/main/map.json" "https://raw.githubusercontent.com/ngdangtu-vn/Deno-Expoxysaurus/main/mod.ts"`

To _uninstall_, see
[Deno document](https://deno.com/manual/tools/script_installer).

## TODO

- [x] (v0.0.1) finish 'Install using Deno install' instruction
- [ ] (v0.0.1) add CLI help message
- [ ] (v0.1.0) write test cases
- [ ] (v1.0.0) improve replace target url with better algorithm (in
      [`utility.ts`](/src/utility.ts))

# References

- https://unix.stackexchange.com/questions/110348/how-do-i-get-the-list-of-exit-codes-and-or-return-codes-and-meaning-for-a-comm

## Credit

- Gitlab repository icon by [Arc'blroth](https://github.com/Arc-blroth) under
  license [CC-BY-SA-4.0](https://creativecommons.org/licenses/by-sa/4.0). The
  artwork has been cropped to 1:1 scale and resize to fit the requirement.
