import { logger } from "./logger";

const DEFAULT_DISPOSABLE_DOMAINS: readonly string[] = [
  "10minutemail.com",
  "10minutemail.net",
  "20minutemail.com",
  "anonbox.net",
  "armyspy.com",
  "byom.de",
  "cuvox.de",
  "dayrep.com",
  "deadaddress.com",
  "discard.email",
  "discardmail.com",
  "dispostable.com",
  "einrot.com",
  "emailondeck.com",
  "emltmp.com",
  "fakeinbox.com",
  "fakemailgenerator.com",
  "fleckens.hu",
  "getairmail.com",
  "getnada.com",
  "grr.la",
  "guerrillamail.biz",
  "guerrillamail.com",
  "guerrillamail.de",
  "guerrillamail.info",
  "guerrillamail.net",
  "guerrillamail.org",
  "guerrillamailblock.com",
  "harakirimail.com",
  "inboxalias.com",
  "inboxbear.com",
  "inboxkitten.com",
  "jetable.org",
  "mailcatch.com",
  "maildrop.cc",
  "mailforspam.com",
  "mailinator.com",
  "mailinator.net",
  "mailinator.org",
  "mailnesia.com",
  "mailnull.com",
  "mailsac.com",
  "mintemail.com",
  "mohmal.com",
  "moakt.com",
  "mt2015.com",
  "mvrht.net",
  "nwytg.net",
  "objectmail.com",
  "owlpic.com",
  "pokemail.net",
  "rhyta.com",
  "rppkn.com",
  "sharklasers.com",
  "shitmail.me",
  "spam4.me",
  "spambog.com",
  "spambox.us",
  "spamgourmet.com",
  "spamhole.com",
  "spamdecoy.net",
  "spamfree24.com",
  "speedgaus.net",
  "superrito.com",
  "tempail.com",
  "tempinbox.com",
  "tempmail.com",
  "tempmail.net",
  "tempmail.plus",
  "tempmailer.com",
  "tempmailo.com",
  "temp-mail.org",
  "temp-mail.io",
  "temporaryemail.net",
  "throwawaymail.com",
  "trashmail.com",
  "trashmail.de",
  "trashmail.net",
  "trbvm.com",
  "tyldd.com",
  "wegwerfmail.de",
  "wegwerfmail.net",
  "wegwerfmail.org",
  "yopmail.com",
  "yopmail.net",
  "yopmail.fr",
  "zetmail.com",
];

function parseList(raw: string | undefined): string[] {
  if (!raw) return [];
  return raw
    .split(/[\s,]+/)
    .map((d) => d.trim().toLowerCase())
    .filter((d) => d.length > 0);
}

const extras = parseList(process.env.DISPOSABLE_EMAIL_DOMAINS_EXTRA);
const overrides = parseList(process.env.DISPOSABLE_EMAIL_DOMAINS);

const disposableDomains: Set<string> = new Set(
  overrides.length > 0
    ? overrides
    : [
        ...DEFAULT_DISPOSABLE_DOMAINS.map((d) => d.toLowerCase()),
        ...extras,
      ],
);

if (overrides.length > 0) {
  logger.info(
    { count: overrides.length },
    "Using DISPOSABLE_EMAIL_DOMAINS override list",
  );
} else if (extras.length > 0) {
  logger.info(
    { extras: extras.length, total: disposableDomains.size },
    "Loaded disposable email list with env extras",
  );
}

export function isDisposableEmail(email: string): boolean {
  const at = email.lastIndexOf("@");
  if (at < 0) return false;
  const domain = email.slice(at + 1).trim().toLowerCase();
  if (!domain) return false;
  return disposableDomains.has(domain);
}

export function getDisposableDomainCount(): number {
  return disposableDomains.size;
}
