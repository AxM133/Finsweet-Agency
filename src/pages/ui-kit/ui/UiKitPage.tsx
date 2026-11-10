import { Link } from 'react-router'

import {
  AccentBar,
  Avatar,
  Button,
  Card,
  Checkbox,
  Container,
  Eyebrow,
  Heading,
  Input,
  List,
  Logo,
  PixelMark,
  PixelSquare,
  Textarea,
} from '@/shared/ui'

const PEOPLE = [
  { id: 1, name: 'Andrew Jonson' },
  { id: 2, name: 'Javena Melo' },
]

/** Dev-only playground for shared/ui. Not part of the product. */
export function UiKitPage() {
  return (
    <Container className="flex flex-col gap-16 py-16">
      <section className="flex flex-col gap-6">
        <PixelSquare />
        <Eyebrow>Typography</Eyebrow>
        <Heading as="h1" size="display">Transform Your Idea Into Reality</Heading>
        <Heading size="xl">Have a Question ?</Heading>
        <Heading size="lg">We want to get local identification</Heading>
        <Heading size="md">Today’s best design trends</Heading>
        <Heading size="sm">Technical support</Heading>
        <Logo />
      </section>

      <section className="flex flex-wrap items-center gap-8">
        <Button withArrow>Request Quote</Button>
        <Button as={Link} to="/blog" withArrow>As router Link</Button>
        <Button variant="link" withArrow>Read More</Button>
        <Button disabled>Disabled</Button>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <Input label="Name" defaultValue="Paresh Srichandan" />
          <Input label="E-mail" type="email" error="Enter a valid e-mail" defaultValue="paresh@" />
          <Textarea label="Message" placeholder="Type your Message" />
        </div>
        <div className="flex flex-col gap-6">
          <Input variant="filled" label="First Name" />
          <Textarea variant="filled" label="Why do you think you are a good fit?" />
          <div className="bg-brand p-6">
            <Input variant="white" label="Paresh@Pixeto.com" />
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <Checkbox label="I agree to accept the privacy policy" defaultChecked />
        <Checkbox label="Unchecked" />
      </section>

      <section className="grid gap-8 md:grid-cols-3">
        <Card className="p-8">Shadow card</Card>
        <Card variant="outline" className="p-8">Outline card</Card>
        <Card className="relative p-8">
          Card with accent
          <AccentBar reverse className="absolute inset-x-0 bottom-0 h-1" />
        </Card>
      </section>

      <section className="flex items-center gap-8">
        <PixelMark />
        <PixelMark className="size-16" />
        <AccentBar className="h-3 w-64" />
        <AccentBar reverse orientation="vertical" className="h-24 w-3" />
        <List
          className="flex gap-4"
          items={PEOPLE}
          getKey={(person) => person.id}
          renderItem={(person) => (
            <span className="flex items-center gap-2">
              <Avatar name={person.name} size="sm" />
              {person.name}
            </span>
          )}
        />
      </section>
    </Container>
  )
}
