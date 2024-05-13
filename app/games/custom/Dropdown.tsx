"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuRadioGroupDemo() {
  const [position, setPosition] = React.useState("bottom")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild >
        <Button >
        <img alt='Image' className="w-7 h-7" src="https://s3-alpha-sig.figma.com/img/099f/6646/393ac705b514df786776348c62e425ed?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Aff8IhLG3YKavSTxy~lPodV927aVC9y2bJtw7i9nD2u-STM5bk-1RGNMIqznoiii26bxPWJE7YDb7VfpL0aaqcFUuXrFZ8csgAaVgOzufLQW70oDqw~YgO9lbENzA1ffMdS63lF5D5oGLPhTcKmokjvCAH97vcYRCRLsOU-Br7IVrf5ed2GsiGTFO6a9p7OYxms6zxPX55tZlHK~419NKriZvA7Nic63MlZz2CXyvoHZWElB1cEjsbiyCA8FY-IgYn3FsCkK9YZ170apYiImGPl40vywP8lrSNhP9fZ5RTm5GUiCRiTsIqtFYwctQXw1Hay14u7VDSDVHL6tTHDrVg__" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[100px] h-[152px] bg-zinc-300 rounded-[5px] mr-1 ">
       
        <DropdownMenuRadioGroup  onValueChange={setPosition}>
            <div className=" space-y-1">
          <DropdownMenuRadioItem value="top">
            <div className=" flex justify-evenly space-x-2">
          <img alt='Image' className="w-5 h-5" src="https://s3-alpha-sig.figma.com/img/3599/b2e1/71bee6b63e6922a4b7278acdb269c4b6?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=csbpzlGhFANGXEx1q1IPoe2fKZULMa6ofNDPEJM~zeODr7M2T2Ob0gXaNS--4ibx0VYgzVxXbpSrHeMPLtjMligOjgaV-Ui07cyjQsOo6op2JKSZmAthm7NDTymsiaFgLsVJDkg~3mBBflDnnqRRDTG5nhzWYp0UTRh57X3IYj07eDTcBFL2VX3EmOGG4r06Exh1-kaHjJ5PkyfTfZ37g7L4D3Sv5zkDQBcUIlraHKHDAct4Q~oExNshLvaaEr2imVi0R4g~k96mtWnFiTz-12OphD~1muitkz15H7UA1WJhQKCiLl8mmjoKd79A3QbT5MhdhztljxfeSY4By~J2gw__" />
          <div className="text-center text-slate-700 text-xs font-bold font-['Proxima Nova']">Wallet</div>
          </div>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="top">
            <div className=" flex justify-evenly space-x-2">
          <img alt='Image' className="w-5 h-5" src="https://s3-alpha-sig.figma.com/img/f3e2/d264/727085fe4450884e8143925e17946d3a?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a6JVhlpeS9ReBZLwDCmQUkGHP2gTCW-ePoM6AfztpLlr4dGzV4EjZ7-ACOz8bj7dGxkfSPagLM1fFNxVNdjGcW9JJWKkxiCofcfRg~JoYNtqCkV7iezetbUBjF2pN-6NjkZu9uvxxXwE3JfyqKepblkBvxC-SFnK25uAanXhHOElrplPGndN5tyvKvfBlaDEvgJQECow-zcOkiYZ7CqQdrT~Y7N9cLv3H5~xudtBn0J2UveaYYaO7WemkE~Q3uHkvY6G4fcoQjZUkHVJ2mPwkDhf7QLFXAYBVev2ufs4j~FAiohn1skp77kYSy~mRAo~r8NA9h8xY4rusRJ-oO87Bg__" />
          <div className="text-center text-slate-700 text-xs font-bold font-['Proxima Nova']">Affiliate</div>
          </div>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="top">
            <div className=" flex justify-evenly space-x-2">
          <img alt='Image' className="w-5 h-5" src="https://s3-alpha-sig.figma.com/img/3af9/bb48/ff9fd8e79454783c58c108a210bc0fd3?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bpfJT-rpDeCsOY~ZPlAEwktOdP1uem1EFJmDv7jNVICR392KBRAxoMWyOF1aNZtq2PUaJv0yt6vIOqDFJq9wUxvwxVBybA4Ks4bacehtxGINToox8nMfWPrszk~Wjbxz33Y7tPq0i7FJYwp3ALIqohlhePD63zp8oWT272c7drrHsWD1gIDs8DQFCTE1W0SQRDVAD~hCdmzGcdWkeCkKuz6goJuNMK0s~L4hNHCdgILhVC688L2M-oAXc~9tmVuRkzNadCehAp~dWAklzVZole7Zg0bTeENvi~ZQ5bkTfcd5XsRezoBPvwp7KP66-B4~e-Jttz4g6BaLjmAUa2skoA__" />
          <div className="text-center text-slate-700 text-xs font-bold font-['Proxima Nova']">Fairness</div>
          </div>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="top">
            <div className=" flex justify-evenly space-x-2">
          <img alt='Image' className="w-5 h-5" src="https://s3-alpha-sig.figma.com/img/c3c3/c5c1/3b486abbceb93d55f805fe423a5e1b23?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K7gxGIaJPjq8QB0bNZvXrN6JAKMJVOrkW1OjzQT0fwbJLxWHMGbyVZNoCa0O-iijYznOmTOOlKs72p4QQuaJ6DuMOfzIpLWH8GOWFY7TtxZl79tB-Zkf9hjxxB14knwcye4RkZTNwbnB2i~5k6tVVCxAMJPHRH8GdPTcxOgkC3f3XLRCzf45B-OKVdiBNQomDQ-odT4JTsRJldYvHTBIUjxApC67JDN8a57P2Jf8zD9tYDso33Mm2DLnhfp-HFxYu6rieGb6gZcC3kw-3bP6-Iv7SixPJbuwhKbXMDL2ZTTFJNlXNYmLBAx6geUQmx4P7gnEZD5JSyjOQ1dP5XLQ8A__" />
          <div className="text-center text-slate-700 text-xs font-bold font-['Proxima Nova']">Help Center</div>
          </div>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="top">
            <div className=" flex justify-evenly space-x-2">
          <img alt='Image' className="w-5 h-5" src="https://s3-alpha-sig.figma.com/img/379e/00b8/0c4f1d0857f8f2515d352500661670ce?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jh9nOW0Dj1beM34UXzlGdU31pEk8KwLR1WAi1LQBHzGoNef60FDFLT4tgE3yaA~JzhwekBhumgQOgbA8b280DY5bnpYgu4SK1ukLWCx6pnQ4x2Ial1x8hY6~vEejEFaE0Vu3nGgeLwF9Qg5zs616FRkY0I16hukLI3Jz1ebOSadHsowEx~ckWtqE8SQ0qEjnPmpEN0zAMXAH4UkqC1EX9JuqoheJPeCa4ZQdukK3WprA~wEPKg~GjR9IPMHMox8Q8jy-5fNLcH1elYw1SESwqtddDVZtjbeADjjqjWs9w7DL2-UOrgZO988IKTdL1pC8WlkllELZpZ4TPYlaMjfJ9Q__" />
          <div className="text-center text-slate-700 text-xs font-bold font-['Proxima Nova']">Setting</div>
          </div>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="top">
            <div className=" flex justify-evenly space-x-2">
          <img alt='Image' className="w-5 h-5" src="https://s3-alpha-sig.figma.com/img/2114/c73d/b20ccd3e0cf399b44bd3b259da7dc496?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GjoJ3St22Znzd4UJTQ0LRAwd0JEo4YnsyzKCvZwjG6hwmWMLcqOMXJgsy5bDhvromkDMH56N85TkTtNBCMMz1ZZMo35mmaQF2oANY2F6XQuxd-cTEc3tDbIq1CaVzbAv9P-1QmPXi2VcnEdOBuo~Dn0X8zkJi0xx~iV8s8G6UZqnkxzPQ0C2YJVNucsCD0cU4UtwphxKADOYVhxepj9JtudAj~YElo2ebNNQ3UQ6w3ZSt4nOSjdD0KhCje44safwkZmo0lFfl9vDea40Sd9ydIkU9Axoz~VcIBOMzle7cCP9R4jwwEF1M09FT1VJdJ0HHOIp1LY5DObxQsmY3V51NQ__" />
          <div className="text-center text-slate-700 text-xs font-bold font-['Proxima Nova']">Log out</div>
          </div>
          </DropdownMenuRadioItem>
          </div>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
