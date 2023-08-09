import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {Providers} from "@/components/providers";
import Image from "next/image"
import TeamSwitcher from "@/components/team-switcher"
import {MainNav} from "@/components/main-nav"
import {Search} from "@/components/search";
import {UserNav} from "@/components/user-nav";
import {ThemeToggle} from "@/components/theme-toggle";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'rontor',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
          <Providers>
              <div className="hidden flex-col md:flex">
                  <div className="md:hidden">
                      <Image
                          src="/examples/dashboard-light.png"
                          width={1280}
                          height={866}
                          alt="Dashboard"
                          className="block dark:hidden"
                      />
                      <Image
                          src="/examples/dashboard-dark.png"
                          width={1280}
                          height={866}
                          alt="Dashboard"
                          className="hidden dark:block"
                      />
                  </div>
                  <div className="border-b">
                      <div className="flex h-16 items-center px-4">
                          <Image src='/Logo_Light.png' alt='Logo' width={120} height={40} className='space-x-2 mr-4 block dark:hidden'/>
                          <Image src='/Logo_Dark.png' alt='Logo' width={120} height={40} className='space-x-2 mr-4 hidden dark:block'/>
                          <TeamSwitcher />
                          <MainNav className="mx-4" />
                          <div className="ml-auto flex items-center space-x-4">
                              <Search />
                              <ThemeToggle />
                              <UserNav />
                          </div>
                      </div>
                  </div>
                {children}
              </div>
          </Providers>
      </body>
    </html>
  )
}
