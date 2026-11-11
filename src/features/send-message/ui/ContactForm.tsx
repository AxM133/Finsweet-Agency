import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'

import { useZodForm } from '@/shared/lib'
import { ArrowRightIcon, Button, CheckIcon, EASE, Input, Spinner, Textarea } from '@/shared/ui'

import { useSendMessage } from '../api/use-send-message'
import { sendMessageSchema } from '../model/schema'

export function ContactForm() {
  const [isSent, setIsSent] = useState(false)
  const { mutateAsync } = useSendMessage()

  const { formProps, errors, isSubmitting, submitError, reset } = useZodForm({
    schema: sendMessageSchema,
    onSubmit: async (values) => {
      await mutateAsync(values)
      setIsSent(true)
    },
  })

  return (
    <AnimatePresence mode="wait" initial={false}>
      {isSent ? (
        <motion.div
          key="sent"
          role="status"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="flex max-w-md flex-col items-start gap-5 bg-mint p-8"
        >
          <span className="grid size-10 place-items-center bg-primary text-white">
            <CheckIcon className="size-6" />
          </span>
          <p className="text-xl font-semibold text-ink">Thank you! Your message has been sent.</p>
          <p className="text-sm text-muted">Our team will get back to you within 24 hrs.</p>
          <Button
            variant="link"
            onClick={() => {
              reset()
              setIsSent(false)
            }}
          >
            Send another message
          </Button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="flex max-w-md flex-col gap-8"
          {...formProps}
        >
          <Input name="name" label="Name" autoComplete="name" error={errors.name} disabled={isSubmitting} />
          <Input
            name="email"
            type="email"
            label="E-mail"
            autoComplete="email"
            error={errors.email}
            disabled={isSubmitting}
          />
          <Input name="subject" label="Subject" error={errors.subject} disabled={isSubmitting} />
          <Textarea
            name="message"
            label="Message"
            placeholder="Type your message"
            error={errors.message}
            disabled={isSubmitting}
          />

          {submitError && (
            <p role="alert" className="text-sm text-red-500">
              {submitError}
            </p>
          )}

          <Button type="submit" disabled={isSubmitting} className="mt-2 self-start">
            {isSubmitting ? (
              <>
                Sending
                <Spinner className="size-5" />
              </>
            ) : (
              <>
                Send Message
                <ArrowRightIcon className="size-5" />
              </>
            )}
          </Button>
        </motion.form>
      )}
    </AnimatePresence>
  )
}
