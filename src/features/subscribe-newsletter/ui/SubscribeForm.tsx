import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'

import { useZodForm } from '@/shared/lib'
import { ArrowRightIcon, Button, CheckIcon, EASE, Input, Spinner } from '@/shared/ui'

import { useSubscribe } from '../api/use-subscribe'
import { subscribeSchema } from '../model/schema'

export function SubscribeForm() {
  const [subscribedEmail, setSubscribedEmail] = useState<string>()
  const { mutateAsync } = useSubscribe()

  const { formProps, errors, isSubmitting, submitError } = useZodForm({
    schema: subscribeSchema,
    onSubmit: async (values) => {
      await mutateAsync(values)
      setSubscribedEmail(values.email)
    },
  })

  return (
    <AnimatePresence mode="wait" initial={false}>
      {subscribedEmail ? (
        <motion.div
          key="success"
          role="status"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="flex min-h-16 items-center gap-4 bg-white px-6 py-4 text-ink"
        >
          <span className="grid size-8 shrink-0 place-items-center bg-primary text-white">
            <CheckIcon className="size-5" />
          </span>
          <p className="text-sm">
            <span className="font-medium">You’re subscribed!</span>{' '}
            <span className="text-muted">We’ll send updates to {subscribedEmail}.</span>
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-3"
          {...formProps}
        >
          <div className="flex items-start">
            <div className="flex-1">
              <Input
                name="email"
                type="email"
                variant="white"
                label="Email address"
                placeholder="Your email address"
                autoComplete="email"
                error={errors.email}
                disabled={isSubmitting}
              />
            </div>
            <Button
              type="submit"
              aria-label="Subscribe"
              disabled={isSubmitting}
              className="w-16 shrink-0 bg-ink px-0 hover:bg-ink/85"
            >
              {isSubmitting ? <Spinner className="size-5" /> : <ArrowRightIcon className="size-5" />}
            </Button>
          </div>
          {submitError && (
            <p role="alert" className="text-sm text-white">
              {submitError}
            </p>
          )}
        </motion.form>
      )}
    </AnimatePresence>
  )
}
