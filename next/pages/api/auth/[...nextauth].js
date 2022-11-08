
import NextAuth from "next-auth"
import axios from "axios"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.SECRET,

  callbacks: {
    async signIn(user, account, profile) {
      if (user.account.provider === 'google') {

        const accessToken = user.account.access_token
        const idToken = user.account.id_token


        try {
          const response = await axios.post(
            `${process.env.DJANGO_URL}/api/social/login/google/`,
            {
              access_token: accessToken,
              id_token: idToken,
            }
          )

          const { access_token } = response.data
          user.accessToken = access_token

          return true
        } catch (error) {

          return false
        }
      }
      return false
    },


    async jwt({ token, account }) {

      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },

    async session({ session, token, user }) {

      session.accessToken = token.accessToken
      return session
    }
    
  },
  pages: {
    signIn: '/auth/signin',
  }

});