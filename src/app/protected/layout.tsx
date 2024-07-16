"use client";
import { ApolloProvider } from "@apollo/client";
import { useAuth } from "@clerk/nextjs";
import { useCallback, useEffect, useMemo } from "react";
import { getApolloClient } from "@/src/app/apollo-client";
import { useValidateUserAndUpdateDeviceTokenMutation } from "@/src/graphql-types";
import { useRouter } from "next/navigation";

const InitialLayout = ({ children }: { children: React.ReactNode }) => {
  const { isLoaded, isSignedIn } = useAuth();
  const [validateUserAndUpdateDeviceToken] =
    useValidateUserAndUpdateDeviceTokenMutation();
  const router = useRouter();

  const validateUser = useCallback(async () => {
    try {
      const result = await validateUserAndUpdateDeviceToken({
        variables: { deviceToken: "" },
      });
    } catch (error) {
      // toast.show("There was an error updating your details", {
      //   type: "error",
      // });
      console.error("Error: ", error);
      router.back();
    }
  }, [router, validateUserAndUpdateDeviceToken]);

  useEffect(() => {
    if (!isLoaded) return;

    if (isSignedIn) {
      void validateUser();
    } else if (!isSignedIn) {
      router.back();
    }
  }, [isLoaded, isSignedIn, router, validateUser]);

  return <>{children}</>;
};

const ApolloProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  const { getToken } = useAuth();
  const client = useMemo(() => getApolloClient(getToken), [getToken]);

  return (
    <ApolloProvider client={client}>
      <InitialLayout>{children}</InitialLayout>
    </ApolloProvider>
  );
};

export default ApolloProviderWrapper;
