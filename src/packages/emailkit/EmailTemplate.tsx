import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  render,
  Row,
  Section,
  Text,
} from "@react-email/components";

export type MziyonkeClientEmailProps = {
  userFirstName: string;
  userLastName: string;
  userEmail: string;
  userPhoneNumber: string;
  userMessage: string;
  sentDate: Date;
};

function MziyonkeClientEmail({
  userFirstName,
  userLastName,
  userEmail,
  userPhoneNumber,
  userMessage,
  sentDate,
}: MziyonkeClientEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Preview>Client Email to Mziyonke</Preview>
        <Container>
          <Section style={content}>
            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Hello Mziyonke Team,
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  You have a new email from the Mziyonke website
                </Heading>

                <Text style={paragraph}>
                  <b>From: </b>
                  {userFirstName} {userLastName}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Email: </b>
                  {userEmail}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Phone Number: </b>
                  {userPhoneNumber}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Date Sent: </b>
                  {sentDate.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}{" "}
                </Text>

                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Message: </b>
                  {userMessage}
                </Text>
              </Column>
            </Row>
          </Section>

          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "rgb(0,0,0, 0.7)",
            }}
          >
            © {new Date().getFullYear()} | Mziyonke
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export function renderEmail(props: MziyonkeClientEmailProps) {
  return render(<MziyonkeClientEmail {...props} />);
}

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const logo = {
  padding: "30px 20px",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const boxInfos = {
  padding: "20px",
};
